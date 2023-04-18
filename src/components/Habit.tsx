import '../styles/global.css';

interface HabitProps {
    completed: number
}
function Habit(props: HabitProps) {
    return (<p className='bg-zinc-900 w-10 h-10 text-white round m-2 text-center flex items-center justify-center'>{props.completed}</p>);
}

export default Habit;