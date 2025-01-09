import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/"); //Redirect ke homepage
  }, [router]);

  return null; //Tidak menampilkan apa pun
}
