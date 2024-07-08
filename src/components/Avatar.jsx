const colorsMapping = {
  A: { back: "#fedaa3" },
  B: { back: "#ffc0ce" },
  C: { back: "#ffecc7" },
  D: { back: "#b4ffdb" },
  E: { back: "#a9fffa" },
  F: { back: "#ecd3ff" },
  G: { back: "#d4d1ff" },
  H: { back: "#d2e8ff" },
  I: { back: "#fedaa3" },
  J: { back: "#ffc0ce" },
  K: { back: "#ffecc7" },
  L: { back: "#b4ffdb" },
  M: { back: "#b4ffdb" },
  N: { back: "#a9fffa" },
  O: { back: "#d4d1ff" },
  P: { back: "#ecd3ff" },
  Q: { back: "#d2e8ff" },
  R: { back: "#ffc0ce" },
  S: { back: "#ffecc7" },
  T: { back: "#d4d1ff" },
  U: { back: "#d4d1ff" },
  V: { back: "#ecd3ff" },
  W: { back: "#ffc0ce" },
  X: { back: "#d2e8ff" },
  Y: { back: "#a9fffa" },
  Z: { back: "#fedaa3" },
};

const Avatar = ({ firstName, icon }) => {
  const firstNameLetter = firstName?.toUpperCase().slice(0, 1);
  const name = firstNameLetter ? firstNameLetter : "#";
  const colors = colorsMapping[name];

  return (
    <div className={`cursor-pointer flex items-center justify-center w-10 h-10 overflow-hidden rounded-full`}>
      <div
        className="flex items-center justify-center w-full h-full text-white font-bold text-[26px]"

        style={{
          background: colors ? colors.back : "white",
        }}
      >
        {icon ? <img src={icon} alt={firstName} className="object-cover w-full h-full" /> : name}
      </div>
    </div>
  );
};

export default Avatar;
