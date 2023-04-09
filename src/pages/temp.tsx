<div className="grid min-h-screen gap-5 space-y-5 bg-slate-400 py-20 px-10">
  <div className="rounded-2xl bg-white p-6 shadow-2xl">
    <span className="text-2xl font-semibold">Select Item</span>
    <ul>
      {["gray chair1", "gray chair2", "gray chair3", "gray chair4"].map((i) => (
        <div
          key={i}
          className="my-2 flex justify-between
           odd:bg-blue-100 even:bg-teal-100"
        >
          <span className="text-gray-500">{i}</span>
          <span className="font-semibold">$19</span>
        </div>
      ))}
    </ul>
    <ul>
      {["a", "b", "c", ""].map((c, i) => (
        <li key={i} className="bg-red-500 py-2 empty:hidden">
          {c}
        </li>
      ))}
    </ul>
    <div className="my-2 flex justify-between border-t-2 border-dashed pt-2">
      <span>Total</span>
      <span className="font-bold">$970</span>
    </div>
    <div className="flex justify-center">
      <button
        className="mx-auto w-2/4 rounded-xl bg-blue-500 p-3 text-center text-xl text-white
  hover:bg-teal-500 focus:text-red-500 active:bg-gray-500"
      >
        Checkout
      </button>
    </div>
  </div>
  <div className="group overflow-hidden rounded-2xl bg-white shadow-2xl">
    <div className="bg-blue-500 p-6 pb-14">
      <span className="text-2xl text-white">Profile</span>
    </div>
    <div className="relative -top-5 rounded-3xl bg-white p-6">
      <div className="relative -top-16 flex items-end justify-between">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">Orders</span>
          <span className="font-medium">340</span>
        </div>
        <div className="h-24 w-24 rounded-full bg-zinc-300 transition-colors group-hover:bg-gray-400" />
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">Spent</span>
          <span className="font-medium">$2,310</span>
        </div>
      </div>
      <div className="relative -mb-5 -mt-11 flex flex-col items-center">
        <span className="text-lg font-medium">Tony Molloy</span>
        <span className="text-sm text-gray-500">미국</span>
      </div>
    </div>
  </div>
  <div className="rounded-2xl bg-white p-10 shadow-2xl">
    <div className="mb-3 flex items-center justify-between">
      <span>←</span>
      <div className="space-x-3">
        <span>⭐️ 4.9</span>
        <span className="rounded-md p-2 shadow-md">❤️</span>
      </div>
    </div>
    <div className="mb-5 h-72 bg-zinc-400" />
    <div className="flex flex-col">
      <span className="text-xl font-medium">Swoon Lounge</span>
      <span className="text-sm text-gray-300">Chair</span>
      <div className="mt-3 mb-3 flex items-center justify-between">
        <div className="space-x-2">
          <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
          <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
          <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl font-medium text-gray-500">
            -
          </button>
          <span>1</span>
          <button className="flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 p-1.5 text-xl font-medium text-gray-500">
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="fpmt=medium text-2xl">$450</span>
        <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-white">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>;
