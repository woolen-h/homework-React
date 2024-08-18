import React from "react";

function Title() {
  const getFormattedDate = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}-${month}-${day} (${dayOfWeek})`;
  };

  return (
    <>
      <h1 className="title__head">우리, 오늘 뭐할까?</h1>
      <p className="title__date">{getFormattedDate()}</p>
    </>
  );
}

export default Title;
