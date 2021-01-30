import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import SmartView from "./smart.js";

const BAR_HEIGHT = 55;
const MILLISECONDS_PER_DAY = 86400000;

const renderMoneyChart = (moneyCtx, data) => {
  const types = data.map((item) => item.type);
  const typesUniq = [...new Set(types)];

  moneyCtx.height = BAR_HEIGHT * typesUniq.length;

  const getPriceByType = (type) => {
    return data.filter((item) => item.type === type).reduce((sum, item) => sum + item.price, 0);
  };


  return new Chart(moneyCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: typesUniq.map((item) => item.toUpperCase()),
      datasets: [{
        data: typesUniq.map(getPriceByType),
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: (val) => `€ ${val}`
        }
      },
      title: {
        display: true,
        text: `MONEY`,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 50
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  });
};

const renderTypeChart = (typeCtx, data) => {
  const types = data.map((item) => item.type);
  const typesUniq = [...new Set(types)];

  typeCtx.height = BAR_HEIGHT * typesUniq.length;

  const countItemsByType = (type) => {
    return data.filter((item) => item.type === type).length;
  };

  return new Chart(typeCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: typesUniq.map((item) => item.toUpperCase()),
      datasets: [{
        data: typesUniq.map(countItemsByType),
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: (val) => `${val}x`
        }
      },
      title: {
        display: true,
        text: `TYPE`,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 50
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  });
};

const renderTimeChart = (timeCtx, data) => {
  const types = data.map((item) => item.type);
  const typesUniq = [...new Set(types)];

  timeCtx.height = BAR_HEIGHT * typesUniq.length;

  const getDurationByType = (type) => {
    const result = data
      .filter((item) => item.type === type)
      .map((item) => item.timeFinish - item.timeStart)
      .reduce((sum, item) => sum + item, 0);

    return Math.ceil(result / MILLISECONDS_PER_DAY);
  };

  return new Chart(timeCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: typesUniq.map((item) => item.toUpperCase()),
      datasets: [{
        data: typesUniq.map(getDurationByType),
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: (val) => `${val}D`
        }
      },
      title: {
        display: true,
        text: `TIME-SPEND`,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 50
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  });
};

const createStatisticsTemplate = () => {

  return `<section class="statistics">
          <h2 class="visually-hidden">Trip statistics</h2>

          <div class="statistics__item statistics__item--money">
            <canvas class="statistics__chart  statistics__chart--money" width="900"></canvas>
          </div>

          <div class="statistics__item statistics__item--transport">
            <canvas class="statistics__chart  statistics__chart--transport" width="900"></canvas>
          </div>

          <div class="statistics__item statistics__item--time-spend">
            <canvas class="statistics__chart  statistics__chart--time" width="900"></canvas>
          </div>
        </section>`;
};

export default class StatisticsView extends SmartView {
  constructor(tripEvents) {
    super();

    this._data = tripEvents;
    this._moneyChart = null;
    this._typeChart = null;
    this._timeChart = null;

    this._setCharts();
  }

  removeElement() {
    super.removeElement();
  }

  getTemplate() {
    return createStatisticsTemplate(this._data);
  }

  restoreHandlers() {
    this._setCharts();
  }

  _setCharts() {
    if (this._moneyChart !== null || this._typeChart !== null || this._timeChart !== null) {
      this._moneyChart = null;
      this._typeChart = null;
      this._timeChart = null;
    }

    const moneyCtx = this.getElement().querySelector(`.statistics__chart--money`);
    const typeCtx = this.getElement().querySelector(`.statistics__chart--transport`);
    const timeCtx = this.getElement().querySelector(`.statistics__chart--time`);

    this._moneyChart = renderMoneyChart(moneyCtx, this._data);
    this._typeChart = renderTypeChart(typeCtx, this._data);
    this._timeChart = renderTimeChart(timeCtx, this._data);
  }
}
