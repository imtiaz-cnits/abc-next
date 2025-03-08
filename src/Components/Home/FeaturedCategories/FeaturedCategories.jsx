"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("https://api.abcpabnabd.com/api/v1/category");

      if (response?.data?.status === "success") {
        setCategories(response?.data?.data);
      }
    };

    fetchCategories();
  }, []);

  return (
    // <!-- Categories Start -->
    <div id="categories">
      <div className="container">
        <div className="heading">
          <div>
            <h2>Featured Category</h2>
          </div>
        </div>
        <div className="categories_wrapper">
          <div className="row g-3 g-md-4">
            {categories?.slice(0, 12)?.map((category) => (
              <div
                key={category?._id}
                className="col-lg-2 col-6 col-sm-4 d-flex align-item-stretch"
              >
                <Link
                  href={`/categories/${category?._id}`}
                  className="categories_card"
                >
                  <div className="categories_title">
                    <h2>{category?.categoryName}</h2>
                  </div>
                  <div className="catagories_image">
                    <img
                      src={`https://api.abcpabnabd.com${category.categoryImg}`}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <!-- Categories end -->
  );
};

export default FeaturedCategories;
