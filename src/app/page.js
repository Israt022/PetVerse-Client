import AdoptionProcess from "@/components/homepage/AdoptionProcess";
import Banner from "@/components/homepage/Banner";
import CategoryPage from "@/components/homepage/CategoryPage";
import PetCareTips from "@/components/homepage/PetCareTips";
import SuccessStories from "@/components/homepage/SuccessStories";
import WhyAdoptPets from "@/components/homepage/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <CategoryPage />
      <WhyAdoptPets />
      <SuccessStories />
      <PetCareTips />
      <AdoptionProcess />
    </div>
  );
}
