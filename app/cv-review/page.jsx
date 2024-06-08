"use client";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.min.mjs";

const ReviewCv = () => {
  const [width, setWidth] = useState(1200);
  const [load,setLoad]=useState(0)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="my-[100px] relative z-[20]">
      {load===0?<div className="flex justify-center text-white text-xl">
        Loadding CV...
      </div>:load===1&&<div className="flex justify-center text-white text-xl">
        Error when load CV. Try dowload my CV
      </div>}
      <Document
        file="/MyCV.pdf"
        className="d-flex w-fit mx-auto justify-content-center"
        
      >
        <Page
          className="absolute"
          onLoadSuccess={()=>{setLoad(2)}}
          onLoadError={()=>{setLoad(1)}}
          pageNumber={1}
          scale={
            width > 900 ? 1.7 : width > 786 ? 1.5 : width > 500 ? 0.8 : 0.6
          }
        />
      </Document>
      <div className="flex justify-center mt-10 ">
        <a
          href="/MyCV.pdf"
          className="w-full py-2  button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          download="CV-THANGDEVALONE.pdf"

        >
          Dowload My CV
        </a>
      </div>
    </div>
  );
};

export default ReviewCv;
