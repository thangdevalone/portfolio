import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-[calc(100vh_-_80px)] flex items-center justify-center">
      <div className="w-fit h-fit">
        <span className="inline-block mr-[20px] text-white pr-[23px] text-[24px] border-r border-white">404</span>
        <p className="inline-block leading-[49px] text-white  ">This page could not be found.</p>
      </div>
    </div>
  );
}
