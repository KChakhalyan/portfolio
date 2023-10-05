import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SendButton = () => {
   const { pending } = useFormStatus();
   return (
      <button type="submit" className="group send-email-btn" disabled={pending}>
         {pending ? (
            <div className="w-5 h-5 animate-spin rounded-full border-b-2  border-white "></div>
         ) : (
            <>
               Send{" "}
               <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
         )}
      </button>
   );
};
export default SendButton;
