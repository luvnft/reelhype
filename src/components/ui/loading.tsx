import { Oval } from "react-loader-spinner";

// Default values shown
export default function Loading() {
  return (
    <div className="mx-auto flex h-full w-full justify-center">
      <Oval
        visible={true}
        height="50"
        width="50"
        color="#F5C111"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
