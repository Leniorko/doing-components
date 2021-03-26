import artem50profile from "../img/artem50profile.jpg";

export default function DialogItem() {
  return (
    <div className="flex flex-row max-w-xs p-4 hover:bg-gray-100 transition-colors duration-100 border-t-2 border-gray-100">
      <img
        src={artem50profile}
        alt="Profile photo"
        className="w-12 h-12 mr-6 rounded-full"
      />
      <div className="w-full flex flex-col">
        <div className="flex flex-row place-content-between items-baseline w-full">
          <p className=" font-bold">Артём Россет</p>
          <p className=" ml-auto text-sm">23:59</p>
        </div>
        <div>
            <p>Вы: Ваше сообщение</p>
        </div>
      </div>
    </div>
  );
}
