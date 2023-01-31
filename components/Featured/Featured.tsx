import { Annie_Use_Your_Telescope } from "@next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Featured.module.scss";

export const Featured = () => {
  const [slider, setSlider] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  function handleArrow(direction: string) {
    if (direction === "r" && slider < 2) {
      setSlider(slider + 1);
    } else if (direction === "l" && slider > 0) {
      console.log("first");
      setSlider(slider - 1);
    }
  }
  console.log(slider);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          src="/img/arrowl.png"
          alt=""
          layout="fill"
          onClick={() => handleArrow("l")}
          // objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slider}vw)` }}
      >
        {images.map((img, index) =>
          // slider === index ? (
            <div key={index} className={styles.imgContainer}>
              {/* <Image src={img} alt="" layout="fill" key={index}/> */}
              <Image
                src={img}
                alt=""
                layout="fill"
                // objectFit="contain"
              />
            </div>
          // ) : (
          //   <></>
          // )
        )}
      </div>
      <div className={styles.arrowContainer} 
      style={{ right: 0 }}  onClick={() => handleArrow("r")}>
        <Image
          src="/img/arrowr.png"
          alt=""
          layout="fill"
          // objectFit="contain"
        />
      </div>
    </div>
  );
};
