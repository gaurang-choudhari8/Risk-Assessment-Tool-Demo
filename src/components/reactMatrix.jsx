import React from 'react';

const MatrixGrid = () => {
  // Sample data for demonstration - you can replace this with your own content
  const sampleContent = [
    [['Social Media','Third Party Engagement'], ['Vendor and Contractor Management'], ['Interactions with Institutional Customers (including GPOs)','Sales Presentations'], ['Speaker Programs','Congress Booths']],
    [['Consultant Arrangements','Field Medical Activities','Use of AI'], ['Clinical Trials','Interactions with Payers'], ['Educational Items and Reprints'], ['Specialty Pharmacy Arrangements']],
    [['Political Payments or Contributions'], ['Medical Information Requests'], ['C3','Z4'], ['C4','Z5']],
    [['D1','Z3'], ['D2','Z2'], ['D3','Z4'], ['D4','Z5']]
  ];

  const xAxisLabels = ['1 - Low', '2 - Moderate', '3 - Major', '4 - Critical'];
  const yAxisLabels = ['4 - Critical', '3 - Major', '2 - Moderate', '1 - Low'];
  const xAxisHeading = 'Qualitative Score';
  const yAxisHeading = 'Quantitative Score';

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Matrix Grid</h1>
      
      <div className="w-full">
        {/* Matrix Container */}
        <div className="w-full border-2 border-gray-300 bg-white rounded-lg shadow-lg p-6">
          {/* Y-axis heading and matrix rows */}
          <div className="flex">
            {/* Y-axis heading (vertical) */}
            <div className="flex items-center justify-center w-12 mr-4">
              <div className="transform -rotate-90 whitespace-nowrap font-bold text-lg text-gray-800">
                {yAxisHeading}
              </div>
            </div>
            
            <div className="flex flex-col flex-1">
              {/* Matrix rows with Y-axis labels */}
              {sampleContent.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center mb-2">
                  {/* Y-axis label */}
                  <div className="w-32 text-left pr-6 font-semibold text-md text-gray-700">
                    {yAxisLabels[rowIndex]}
                  </div>
                  
                  {/* Matrix cells */}
                  <div className="flex flex-1">
                    {row.map((cell, colIndex) => {
                        const bucketRiskScore = (4 - rowIndex)*(colIndex+1);
                        let bgColor, textColor;
                        switch (bucketRiskScore) {
                            case 16:
                                bgColor = 'bg-red-600';
                                textColor = 'text-white';
                                break;
                            case 12:
                                bgColor = 'bg-red-500';
                                textColor = 'text-white';
                                break;
                            case 9:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-blue-800';
                                break;
                            case 8:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-blue-800';
                                break;
                            case 6:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-blue-800';
                                break;
                            case 4:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-blue-800';
                                break;
                            case 3:
                                bgColor = 'bg-green-400';
                                textColor = 'text-blue-800';
                                break;
                            case 2:
                                bgColor = 'bg-green-400';
                                textColor = 'text-blue-800';
                                break;
                            case 1:
                                bgColor = 'bg-green-800';
                                textColor = 'text-white';
                                break;
                        }

                        return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`flex-1 h-24 border-2 border-black flex items-center justify-center ${bgColor} hover:bg-blue-100 transition-colors cursor-pointer mr-1 last:mr-0`}
                      >
                        {/* This is where you can put any HTML element */}
                        <div className="text-center">
                          <div className={`font-medium text-md ${textColor} `}>{(4 - rowIndex)*(colIndex+1)}</div>
                          {cell.map((activity) => (<div className={`text-sm ${textColor} `}>{activity}</div>))}
                        </div>
                      </div>
                    )})}
                  </div>
                </div>
              ))}
              
              {/* X-axis labels at bottom */}
              <div className="flex ml-32 mt-4">
                {xAxisLabels.map((label, index) => (
                  <div key={index} className="flex-1 text-center font-semibold text-md text-gray-700 mr-1 last:mr-0">
                    {label}
                  </div>
                ))}
              </div>
              
              {/* X-axis heading at bottom */}
              <div className="flex justify-center ml-32 mt-4">
                <div className="font-bold text-lg text-gray-800">
                  {xAxisHeading}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MatrixGrid;