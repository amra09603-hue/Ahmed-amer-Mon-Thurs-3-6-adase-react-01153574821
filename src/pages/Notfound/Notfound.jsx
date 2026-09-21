import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>

      {/*  Error Section */}
      <section className="relative  bg-neutral-950 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:60px_60px]">
        <div className="absolute inset-0  bg-[radial-gradient(circle_500px_at_15%_200px,#f9731615,transparent)] pointer-events-none" />
        <div className=" z-10 text-center ">
          <div className="text-[190px] font-semibold  text-orange-400 ">
            404
          </div>
          <i class="fa-regular fa-face-frown relative font-medium text-6xl text-orange-400 block py-10 px-10 border border-amber-600  pl-[100px] rounded-full bg-amber-500/15">
            <i class="fa-solid fa-square fa-bounce text-2xl text-orange-500 absolute right-[-10px] top-0"></i>
            <i className="fa-solid fa-circle fa-fade text-xl  text-orange-400 absolute left-[-10px] bottom-[-10px]"></i>
          </i>
          <div className="text-white text-3xl my-5 font-semibold">
            عفواً! الصفحة غير موجودة
          </div>
          <div className="text-gray-300/70 text-lg ">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
            <span className="block">المسار الصحيح.</span>
          </div>
          <Link to="/">
            <button className="text-white cursor-pointer hover:-translate-y-1 duration-300 bg-orange-500 px-6 py-4 font-semibold rounded-full ml-4 mt-7">
              <i class="fa-regular fa-house ml-1"></i>
              الذهاب للرئسية
            </button>
          </Link>
          <Link to="/blog">
            <button className="text-white cursor-pointer group hover:border-amber-500 hover:bg-amber-600/20 hover:text-black   bg-transparent border border-gray-200/20 px-6 py-4 font-semibold rounded-full mt-7">
              <i class="fa-regular fa-newspaper ml-1 group-hover:text-orange-500"></i>
              <span className="group-hover:text-orange-500">
                {" "}
                تصفح المقالات
              </span>
            </button>
          </Link>
          <div className="border-b border-b-gray-200/15 my-6 w-[32%] text-center mr-[33%]"></div>
          <div className="text-sm text-gray-400/60">قد تجد هذه مفيدة:</div>
          <div>
            <Link className="text-orange-500 text-sm mx-5" to="">
              الرئسية
            </Link>
            <span className="text-xl text-white">.</span>
            <Link className="text-orange-500 text-sm mx-5" to="About">
              من نحن
            </Link>
            <span className="text-xl text-white">.</span>
            <Link className="text-orange-500 text-sm mx-5" to="blog">
              المدونة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
