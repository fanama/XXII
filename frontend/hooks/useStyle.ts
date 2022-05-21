export const useStyle = () => {
  const inputTail =
    "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  const labelTail =
    "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 text-center";

  const formTail = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs  ";

  const titleTail =
    "font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600";

  const buttonTail =
    "inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full";

  return { formTail, titleTail, labelTail, inputTail, buttonTail };
};
