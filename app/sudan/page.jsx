import calculateMEB from '@/app/utils/CalculateMeb';
import Map from '@/app/utils/map';
import Charts from '@/app/utils/Charts';

const Page = async () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const res = await fetch('http://137.184.224.29:3001/api/sudan',{
        next: { revalidate: 0 },
      });

    const data = await res.json();
    // console.log(data.sudanData[data.sudanData.length - 1])
    let dataList = data.sudanData[data.sudanData.length - 1];

    const currentData = [dataList.Food, dataList.Housing, dataList.Healthcare, dataList.Transportation, dataList.Education, dataList.Utilities, dataList.Clothing, dataList.PersonalCare, dataList.Communication, dataList.Savings, dataList.Other];
    
    const weights = [0.25, 0.2, 0.15, 0.1, 0.1, 0.05, 0.05, 0.03, 0.03, 0.02, 0.02];
    // Food: 25%
    // Housing (rental prices): 20%
    // Healthcare services: 15%
    // Transportation: 10%
    // Education: 10%
    // Utilities (electricity, water, gas): 5%
    // Clothing: 5%
    // Personal care items: 3%
    // Communication (phone, internet): 3%
    // Savings/emergency fund: 2%
    // Other basic necessities: 2%

    let result = calculateMEB(currentData, weights);

    let currentMonth = []
    let currentMEB = []

    data.sudanData.forEach((item) => {
        const currentDataItems = [item.Food, item.Housing, item.Healthcare, item.Transportation, item.Education, item.Utilities, item.Clothing, item.PersonalCare, item.Communication, item.Savings, item.Other];

        currentMonth.push(item.Month);
        currentMEB.push(calculateMEB(currentDataItems, weights));
    });
    console.log(currentMonth, currentMEB)

    const chartData = {
        labels: currentMonth,
        datasets: [
          {
            label: 'MEB Data',
            data: currentMEB,
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };




    return (
        <div className='main'>
            
            <div className="top-main">
                <div>
                    <h1 className="font-600">sudan</h1>
                    <p>sudan is a country in Africa.</p>
                </div>
                <div className="date-card">
                    {formattedDate}
                </div>
            </div>
            <hr className='mt-6' />
            <div className="mid-main">
                <div className='container-card p-8 container-col'>
                    <div className='container-card--top'>
                        <h2>Current MEB</h2>
                        <h1>${result.toFixed(2)} <span className="currency">USD</span></h1>
                    </div>
                    <Charts data={chartData} options={options} />
                </div>
                <div className="container-card">
                    <Map lng={Number(dataList.longitude)} lat={Number(dataList.latitude)} text="sudan"  />
                </div>
            </div>
        </div>
    );
}

export default Page;
