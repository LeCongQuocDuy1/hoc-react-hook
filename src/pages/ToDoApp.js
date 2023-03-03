import React from 'react'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ToDoApp = () => {
    const [works, setWorks] = useState([]);
    const [value, setValue] = useState("");

    const handleValue = (e) => {
        setValue(e.target.value);
    }

    const handleAddWork = () => {
        if (value !== "") {
            const task = {
                id: works.length === 0 ? 1 : works[works.length - 1].id + 1,
                taskName: value,
                taskDone: false,
            }
            setValue("");
            setWorks([...works, task]);
            toast.success('🦄 Add a work success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('🦄 Vui long nhap cong viec day du!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleAddWork();
        }
    }

    const handleDeleteWork = (id) => {
        setWorks(works.filter((work) => work.id !== id));
        toast.success('🦄 Delete a work success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleDoneWork = (id) => {
        setWorks(
            works.map((work) => {
                if (work.id === id) {
                    return { ...work, taskDone: true, }
                } else {
                    return work;
                }
            })
        )
    }

    return (
        <>
            <h3>To Do App</h3>
            <br />

            <input type="text" onChange={handleValue} value={value} onKeyPress={handleEnter} />
            <button onClick={handleAddWork}>Add</button>
            <br />

            {works && works.length > 0 &&
                <ul>
                    {works.map((work) => {
                        return (
                            <li style={{ color: work.taskDone && "green" }} key={work.id}>{work.taskName} - <button onClick={() => handleDeleteWork(work.id)}>X</button> - <button onClick={() => handleDoneWork(work.id)}>Done</button></li>
                        )
                    })}
                </ul>
            }

            <ToastContainer />
        </>
    )
}