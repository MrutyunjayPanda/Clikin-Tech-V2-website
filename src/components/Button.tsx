function Button({ name }: { name: string }) {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <a
          className=" flex items-center justify-center rounded-md bg-yellow w-52 px-5 p-4 text-lg font-medium text-black shadow hover:bg-black hover:text-yellow"
          href="/"
        >
          {name}
        </a>
      </div>
    </>
  );
}

export default Button;
