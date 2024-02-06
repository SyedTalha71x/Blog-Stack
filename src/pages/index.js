import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "postcss";
import Category from "./category";
import image1 from '../../public/bloghome.jpg'
import Cards from "./cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <section className="home_container h-[80vh] w-[70%] m-auto cursor-pointer">
        <div className="homeheading">
          <h2 style={{ color: props.mode === 'light' ? '' : 'white' }} className="text-center font-extrabold text-5xl tracking-wide uppercase w-full mt-12">the best form of expression is blo<span className="text-red-600">gg</span>ing</h2>
        </div>
        <div className="maincontainer flex justify-center items-center flex-col h-full w-full">
          <div className="home_row">
            <div className="home_row-content grid grid-cols-2 gap-8">
              <div className="leftcontent">
                <Image src={image1} className="homeimage rounded-sm" />
              </div>
              <div className="rightcontent">
                <div>
                  <h2 style={{ color: props.mode === 'light' ? '' : 'white' }} className="font-bold uppercase text-3xl w-full">Explore the world of blogging</h2>
                  <p style={{ color: props.mode === 'light' ? '' : 'gray' }} className="w-full mt-6 text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae, aut laborum odit repellendus cumque dolor nostrum? Ad distinctio, totam incidunt quo repellat optio at iure praesentium dolor molestias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Category />
      <Cards />
    </>
  );
}
