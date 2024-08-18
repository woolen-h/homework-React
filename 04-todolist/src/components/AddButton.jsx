import React, { useState } from "react";
import Modal from "./Modal";
import PocketBase from "pocketbase";

const client = new PocketBase("https://todays-todo-list.pockethost.io");

function AddButton() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState({
    period: "오전",
    hour: "01:00",
  });
  const [endTime, setEndTime] = useState({
    period: "오전",
    hour: "02:00",
  });

  const openModal = () => {
    setIsClosing(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleSave = async () => {
    try {
      const startTimeString = `${startTime.period} ${startTime.hour}`;
      const endTimeString = `${endTime.period} ${endTime.hour}`;

      const newTodo = {
        title: task,
        description: description,
        startTime: startTimeString,
        endTime: endTimeString,
        isCompleted: false,
        archive: false,
      };

      const createdTodo = await client.collection("todolist").create(newTodo);
      onAdd(createdTodo);

      closeModal();
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

  const timeOptions = Array.from({ length: 12 }, (_, i) => {
    const hour = (i + 1).toString().padStart(2, "0");
    return `${hour}:00`;
  });

  return (
    <div className="m__b__32">
      <button className="button__primary" type="button" onClick={openModal}>
        <span className="icon__plus">+</span> 생각났어?
      </button>

      <Modal isOpen={isModalOpen} isClosing={isClosing}>
        <form>
          <label>
            오늘 뭐할래?
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <label>
            간단히 적어볼까?
            <input
              type="textarea"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            언제 시작할거야?
            <div className="time__container">
              <select
                name="startPeriod"
                value={startTime.period}
                onChange={(e) =>
                  setStartTime({ ...startTime, period: e.target.value })
                }
              >
                <option value="오전">오전</option>
                <option value="오후">오후</option>
              </select>
              <select
                name="startHour"
                value={startTime.hour}
                onChange={(e) =>
                  setStartTime({ ...startTime, hour: e.target.value })
                }
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <select
                name="endPeriod"
                value={endTime.period}
                onChange={(e) =>
                  setEndTime({ ...endTime, period: e.target.value })
                }
              >
                <option value="오전">오전</option>
                <option value="오후">오후</option>
              </select>
              <select
                name="endHour"
                value={endTime.hour}
                onChange={(e) =>
                  setEndTime({ ...endTime, hour: e.target.value })
                }
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <div className="button__container">
            <button
              className="button__primary"
              type="button"
              onClick={handleSave}
            >
              저장
            </button>
            <button
              className="button__secondary"
              type="button"
              onClick={closeModal}
            >
              취소
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddButton;
