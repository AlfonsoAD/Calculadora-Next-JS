const InputNumber = ({ valor }) => {
  return (
    <div>
      <input
        value={valor}
        className="bg-black text-white w-80 h-20 font-sans text-6xl mt-20 text-right"
        readOnly
      ></input>
    </div>
  );
};

export default InputNumber;
