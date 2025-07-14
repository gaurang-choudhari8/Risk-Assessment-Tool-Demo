import React from 'react';

const MatrixGrid = () => {
  // Sample data for demonstration - you can replace this with your own content
  const sampleContent = [
    [['Social Media','Third Party Engagement'], ['Vendor and Contractor Management'], ['Interactions with Institutional Customers (including GPOs)','Sales Presentations'], ['Speaker Programs','Congress Booths']],
    [['Consultant Arrangements (Including Advisory Boards)','Field Medical Activities','Use of AI'], ['Clinical Trials','Interactions with Payers'], ['Educational Items and Reprints'], ['Specialty Pharmacy Arrangements']],
    [['Political Payments or Contributions'], ['Medical Information Requests'], [''], ['']],
    [['Patient Advocacy Groups'], [''], ['Patient Support Programs'], ['']]
  ];

  const xAxisLabels = ['1 - Low', '2 - Moderate', '3 - Major', '4 - Critical'];
  const yAxisLabels = ['4 - Critical', '3 - Major', '2 - Moderate', '1 - Low'];
  const xAxisHeading = 'Qualitative Score';
  const yAxisHeading = 'Quantitative Score';

  return (
    <div className="px-6 bg-gray-100 min-h-screen">
      {/*<h1 className="text-2xl font-bold mb-6 text-center">Matrix Grid</h1>*/}
      
      <div className="w-full">
        {/* Matrix Container */}
        <div className="w-full border-2 bg-white shadow-[2px_2px_0_rgba(0,0,0,0.2)] p-4">
          {/* Y-axis heading and matrix rows */}
          <div className="flex">
            {/* Y-axis heading (vertical) */}
            <div className="flex items-center justify-center w-12 mr-4">
              <div className="transform -rotate-90 whitespace-nowrap font-bold text-lg text-gray-600">
                {yAxisHeading}
              </div>
            </div>
            
            <div className="flex flex-col flex-1">
              {/* Matrix rows with Y-axis labels */}
              {sampleContent.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center mb-2">
                  {/* Y-axis label */}
                  <div className="w-32 text-left pr-6 font-semibold text-md text-gray-600">
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
                                bgColor = 'bg-red-600';
                                textColor = 'text-white';
                                break;
                            case 9:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-black';
                                break;
                            case 8:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-black';
                                break;
                            case 6:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-black';
                                break;
                            case 4:
                                bgColor = 'bg-yellow-400';
                                textColor = 'text-black';
                                break;
                            case 3:
                                bgColor = 'bg-green-400';
                                textColor = 'text-black';
                                break;
                            case 2:
                                bgColor = 'bg-green-400';
                                textColor = 'text-black';
                                break;
                            case 1:
                                bgColor = 'bg-green-800';
                                textColor = 'text-white';
                                break;
                        }
                        {/* Earlier text color for the yellow and the green cells: text-blue-800 */}
                        return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`flex-1 min-h-[6rem] border border-gray ${bgColor} hover:bg-blue-100 transition-colors cursor-pointer mr-1 last:mr-0 py-4 relative group`}
                      >
                        {/* Risk score in top right corner */}
                        <div className="absolute top-1 right-2 font-medium text-xs text-black bg-white bg-opacity-90 px-1 py-0.5 rounded">
                          {bucketRiskScore}
                        </div>
                        
                        {/* Activity content centered */}
                        <div className="flex items-center justify-center h-full px-2">
                          <div className="text-center">
                            {cell.map((activity, index) => (
                              <div key={index} className={`text-sm ${textColor} group-hover:text-black`}>{activity}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )})}
                  </div>
                </div>
              ))}
              
              {/* X-axis labels at bottom */}
              <div className="flex ml-32 mt-4">
                {xAxisLabels.map((label, index) => (
                  <div key={index} className="flex-1 text-center font-semibold text-md text-gray-600 mr-1 last:mr-0">
                    {label}
                  </div>
                ))}
              </div>
              
              {/* X-axis heading at bottom */}
              <div className="flex justify-center ml-32 mt-4">
                <div className="font-bold text-lg text-gray-600">
                  {xAxisHeading}
                </div>
              </div>
            </div>
          </div>
        
                    {/* Adding Legends to the Matrix */}
            <div className="flex items-center space-x-4 text-sm mt-16 mb-8 mx-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-600"></div>
                <span>Very High</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-400"></div>
                <span>High</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400"></div>
                <span>Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-800"></div>
                <span>Low</span>
              </div>
            </div>

        </div>
        
      </div>
    </div>
  );
};

export default MatrixGrid;