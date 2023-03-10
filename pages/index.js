import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logoCalc from "../public/logoCalciOS-removebg-preview.png";
const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/calculadora");
    }, 2000);
  }, []);

  return (
    <div className="h-100vh bg-black flex flex-wrap justify-center items-center h-screen">
      <div className=" animate-spin-slow">
        <Image src={logoCalc} alt="Logo calculadora" height="90" width="160" />
      </div>
    </div>
  );
};

export default Index;
