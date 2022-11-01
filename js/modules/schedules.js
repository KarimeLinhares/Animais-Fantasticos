export default function initSchedule() {
  const schedule = document.querySelector('[data-semana]');
  const weekDays = schedule.dataset.semana.split(',').map(Number);
  const weekHour = schedule.dataset.horario.split(',').map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekOpen = weekDays.indexOf(dayNow) !== -1;
  const hourOpen = (hourNow >= weekHour[0] && hourNow < weekHour[1]);

  if(weekOpen && hourOpen) {
    schedule.classList.add('open');
  }
}