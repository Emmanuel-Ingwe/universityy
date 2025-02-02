import Booklist from "@/components/Booklist";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button"; 
import { sampleBooks } from "../constants";

export default function Home() {
  return (
    <div className="">
      <BookOverview {...sampleBooks[0]}/>

      <Booklist
          title="Latest Books"
          books={sampleBooks}
          containerClassName="mt-10"
       />  
    </div>
  );
}
