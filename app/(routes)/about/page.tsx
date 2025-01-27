import Image from "next/image";
import Eventos from "./components/eventos";
import Historia from "./components/historia";

export default function AllProductsPage() {
  return (
    <>
      <div>
        <div
          className="mt-4 pt-20 bg-no-repeat  w-full bg-cover bg-center xl:h-[300px] 2xl:h-[420px] lg:py-20 2xl:py-36 relative text-center items-center inset-0"
          style={{ backgroundImage: "url('/abouthome.jpg')" }}
        >
          <div className="flex justify-center py-5 items-center flex-col md:pt-10 2xl:pt-0">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bebas-neue-regular">
              SERVICIOS
            </h1>
            <p className="schibsted-grotesk text-red-600 text-[14px] md:text-[18px] font-semibold">
              - Luromy restaurante -
            </p>
          </div>
        </div>
        <div className="flex   max-md:flex-col md:pb-16 gap-6 xl:justify-between items-center  max-w-[1300px] mx-auto">
          <div className="flex  px-8 flex-col items-center text-center md:items-start md:text-start lg:px-24">
            <h1 className="text-3xl max-md:text-center  text-slate-800 text-start bebas-neue-regular sm:text-7xl font-bold mb-4">
            ¿Quiénes Somos?
            </h1>
            <p className="text-xl  max-md:text-center  text-start text-gray-600 mb-6 max-w-[1300px]">
            Somos Restaurante Luromy, un restaurante que abrió sus puertas en enero de 2024 con el objetivo de llevar lo mejor de la comida criolla a tu mesa. Nos destacamos por nuestra pasión por los sabores tradicionales y el compromiso de ofrecer platos preparados con ingredientes frescos y de  calidad
            </p>
            <div className="flex flex-col md:flex-row lg:justify-start justify-between items-center bebas-neue-regular">
              {/* <Link
                href="/allproducts"
                className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                aria-label="Comprar ahora"
              >
                Leer mas
              </Link> */}
            </div>
          </div>
          <div>
            <Image
              src="/about01.webp"
              alt="Imagen grande"
              width={1000}
              height={800}
              className=""
            />
          </div>
        </div>
      </div>
      <Eventos />
      <Historia />
    </>
  );
}
