1. HOC - hight order component. (17 урок)
   React.memo - один из HOC-ов (синоним - кеширование) - увеличивает производительность.
   "Защищает" компоненту от излишней перезагрузки (перезагрузки не будет, если непосредственно в этой компоненте не
   произошло каких-либо изменений)

   !!!Все компоненты оборачивать в React.memo