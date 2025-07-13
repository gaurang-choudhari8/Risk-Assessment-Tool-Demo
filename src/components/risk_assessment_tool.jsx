import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, RefreshCw, Plus } from 'lucide-react';
import MatrixGrid from './reactMatrix'

const RiskAssessmentTool = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState('HCP Sponsorships to Scientific Congresses');
  const [selectedLocalizedActivity, setSelectedLocalizedActivity] = useState('US Healthcare Compliance Risk 4');
  const [selectedActionActivity, setSelectedActionActivity] = useState('Clinical Trials');
  const [selectedMitigationActivity, setSelectedMitigationActivity] = useState('Corporate Giving');
  const [calibrationCompleted, setCalibrationCompleted] = useState(true);
  const [showAnnotation, setShowAnnotation] = useState(false);

  {/* { id: 2, label: 'Localized Risk Assessment' }, */}
  {/* { id: 5, label: 'Calibration Discussion' }, */}
  {/* { id: 6, label: 'Action Plan' }, */}

  const steps = [
    { id: 1, label: 'Risk Assessment', active: true },
    { id: 2, label: 'Risk Activity Summary' },
    { id: 3, label: 'Risk Matrix' },
    { id: 4, label: 'Mitigation Plan' },
    { id: 5, label: 'Mitigation Summary' }
  ];

    const riskActivities = [
    { name: 'Speaker Programs', impact: '4 - Very High', likelihood: '4 - Very Likely', selected: true },
    { name: 'Congress Booths', impact: '4 - Very High', likelihood: '3 - Likely' },
    { name: 'Specialty Pharmacy Arrangements', impact: '4 - Very High', likelihood: '2 - Moderately Likely' },
    { name: 'Interactions with Institutional Customers (including GPOs)', impact: '3 - High', likelihood: '3 - Likely' },
    { name: 'Sales Presentations', impact: '3 - High', likelihood: '3 - Likely' },
    { name: 'Educational Items and Reprints', impact: '3 - High', likelihood: '2 - Moderately Likely' },
    { name: 'Patient Support Programs', impact: '3 - High', likelihood: '1 - Less Likely' },
    { name: 'Vendor and Contractor Management', impact: '2 - Moderate', likelihood: '2 - Moderately Likely' },
    { name: 'Clinical Trials', impact: '2 - Moderate', likelihood: '2 - Moderately Likely' },
    { name: 'Interactions with Payers', impact: '2 - Moderate', likelihood: '1 - Less Likely' },
    { name: 'Medical Information Requests', impact: '1 - Low', likelihood: '2 - Moderately Likely' },
    { name: 'Social Media', impact: '1 - Low', likelihood: '1 - Less Likely' },
    { name: 'Third Party Engagement', impact: '1 - Low', likelihood: '1 - Less Likely' },
    { name: 'Consultant Arrangements (Including Advisory Boards)', impact: '1 - Low', likelihood: '1 - Less Likely' },
    { name: 'Field Medical Activities', impact: '1 - Low', likelihood: '-' },
    { name: 'Use of AI', impact: '1 - Low', likelihood: '-' },
    { name: 'Political Payments or Contributions', impact: '1 - Low', likelihood: '-' },
    { name: 'Patient Advocacy Groups', impact: '-', likelihood: '1- Less Likely'}
  ];

    {/* 
    { name: 'HCP Sponsorships to Scientific Congresses', impact: '-', likelihood: '-' },
    { name: 'Interactions with government officials (non-HCPs)', impact: '-', likelihood: '-' },
    { name: 'Investigator Sponsored Research', impact: '-', likelihood: '-' },
    { name: 'Market Research', impact: '-', likelihood: '-' },
    { name: 'Patient Advocacy Groups', impact: '-', likelihood: '-' },
    { name: 'Privacy: Collection & Use of PI', impact: '-', likelihood: '-' },
    { name: 'Privacy: Training & Education on Use', impact: '-', likelihood: '-' },
    { name: 'Privacy: Unintentional Receipt of PI by Field Sales', impact: '-', likelihood: '-' }
      */}

  const localizedRiskActivities = [
    { name: 'Vendor and Contractor Management', impact: '2 - Moderate', likelihood: '4 - Almost Certain' },
    { name: 'Third Party engagement', impact: '1 - Low', likelihood: '4 - Almost Certain' },
    { name: 'Use of AI', impact: '2 - Moderate', likelihood: '3 - Likely' },
    { name: 'India Healthcare Compliance Risk 4', impact: '-', likelihood: '-', selected: true },
    { name: 'India Healthcare Compliance Risk 5', impact: '-', likelihood: '-' },
    { name: 'India Healthcare Compliance Risk 6', impact: '-', likelihood: '-' },
    { name: 'India Healthcare Compliance Risk 7', impact: '-', likelihood: '-' },
    { name: 'India Healthcare Compliance Risk 8', impact: '-', likelihood: '-' },
    { name: 'India Healthcare Compliance Risk 9', impact: '-', likelihood: '-' },
    { name: 'India Healthcare Compliance Risk 10', impact: '-', likelihood: '-' }
  ];

  {/* 
  const summaryData = [
    { activity: 'Speaker Programs', riskArea: 'Compliance', impact: 4, likelihood: 4, score: 12 },
    { activity: 'Field (Sales) Calls', riskArea: 'Healthcare Compliance', impact: 4, likelihood: 4, score: 12 },
    { activity: 'Interactions with Payers', riskArea: 'Healthcare Compliance', impact: 3, likelihood: 4, score: 10 },
    { activity: 'Patient Advocacy Groups', riskArea: 'Healthcare Compliance', impact: 3, likelihood: 3, score: 9 },
    { activity: 'Sales Presentations', riskArea: 'Healthcare Compliance', impact: 3, likelihood: 2, score: 8 },
    { activity: 'Patient Support Programs', riskArea: 'Healthcare Compliance', impact: 2, likelihood: 3, score: 7 }
  ];
  */}

  const summaryData = [
    { activity: 'Speaker Programs', riskArea: 'Compliance', impact: '4 - Very High', likelihood: '4 - Very Likely', score: 12, selected: true },
    { activity: 'Congress Booths', impact: '4 - Very High', riskArea: 'Compliance', likelihood: '3 - Likely', score: 11 },
    { activity: 'Specialty Pharmacy Arrangements', impact: '4 - Very High', riskArea: 'Compliance', likelihood: '2 - Moderately Likely', score: 10},
    { activity: 'Interactions with Institutional Customers (including GPOs)', impact: '3 - High', riskArea: 'Compliance', likelihood: '3 - Likely', score: 9},
    { activity: 'Sales Presentations', impact: '3 - High', riskArea: 'Compliance', likelihood: '3 - Likely', score: 9},
    { activity: 'Educational Items and Reprints', impact: '3 - High', riskArea: 'Compliance', likelihood: '2 - Moderately Likely', score: 8},
    { activity: 'Patient Support Programs', impact: '3 - High', riskArea: 'Compliance', likelihood: '1 - Less Likely', score: 7},
    { activity: 'Vendor and Contractor Management', impact: '2 - Moderate', riskArea: 'Compliance', likelihood: '2 - Moderately Likely', score: 6},
    { activity: 'Clinical Trials', impact: '2 - Moderate', riskArea: 'Compliance', likelihood: '2 - Moderately Likely', score: 6},
    { activity: 'Interactions with Payers', impact: '2 - Moderate', riskArea: 'Compliance', likelihood: '1 - Less Likely', score: 5},
    { activity: 'Medical Information Requests', impact: '1 - Low', riskArea: 'Compliance', likelihood: '2 - Moderately Likely', score: 4},
    { activity: 'Social Media', impact: '1 - Low', riskArea: 'Compliance', likelihood: '1 - Less Likely', score: 3},
    { activity: 'Third Party Engagement', impact: '1 - Low', riskArea: 'Compliance', likelihood: '1 - Less Likely', score: 3},
    { activity: 'Consultant Arrangements (Including Advisory Boards)', impact: '1 - Low', riskArea: 'Compliance', likelihood: '1 - Less Likely', score: 3},
    { activity: 'Field Medical Activities', impact: '1 - Low', riskArea: 'Compliance', likelihood: '-', score: 2 },
    { activity: 'Use of AI', impact: '1 - Low', riskArea: 'Compliance', likelihood: '-', score: 2 },
    { activity: 'Political Payments or Contributions', impact: '1 - Low', riskArea: 'Compliance', likelihood: '-', score: 1 },
    { activity: 'Patient Advocacy Groups', impact: '-', riskArea: 'Compliance', likelihood: '1- Less Likely', score: 1}
  ];

  const actionPlanData = [
    { activity: 'Clinical Trials', status: 'Not Submitted', score: 9, selected: true },
    { activity: 'Interactions with Payers', status: 'Submitted', score: 1 },
    { activity: 'Specialty Pharmacy Arrangements', status: 'Submitted', score: 1 },
    { activity: 'Educational Items and Reprints', status: 'Not Submitted', score: 1 },
    { activity: 'Vendor and Contractor Management', status: 'Not Submitted', score: 5 },
    { activity: 'Consultant Arrangements (including Advisory boards)', status: 'Not Submitted', score: 1 },
    { activity: 'Use of AI', status: 'Not Submitted', score: 7 },
    { activity: 'Field Medical activities', status: 'Not Submitted', score: 1 }
  ];

  const mitigationData = [
    { activity: 'Speaker Programs', score: 12, mitigations: 1, selected: true },
    { activity: 'Corporate Giving', score: 12, mitigations: 1 },
    { activity: 'Exhibits & Displays & Congress booths', score: 1, mitigations: 1 },
    { activity: 'Interactions with Institutional Customers (including GPOs)', score: 1, mitigations: 0 },
    { activity: 'Sales Presentations', score: 10, mitigations: 1 },
    { activity: 'Clinical Trials', score: 9, mitigations: 2 },
    { activity: 'Specialty Pharmacy Arrangements', score: 1, mitigations: 0 }
  ];

  const mitigationSummary = [
    {
      activity: 'Speaker Programs',
      score: 12,
      title: 'Mitigation 1',
      rootCause: 'Ineffective control design',
      mitigationType: 'Monitoring - Analytics',
      therapeuticArea: 'Hematology',
      functionalArea: 'Marketing',
      createdBy: 'MARIANO ANDERSSON',
      assignedTo: 'Assignee',
      startOn: '4/24/2025',
      dueBy: '4/30/2025'
    },
    {
      activity: 'Corporate Giving',
      score: 12,
      title: 'test Mitigation',
      rootCause: 'Culture - Differences',
      mitigationType: 'Oversight - Transactional',
      therapeuticArea: 'Immunology',
      functionalArea: 'Marketing',
      createdBy: 'ERIKA RAMIREZ',
      assignedTo: 'Erika Ramirez',
      startOn: '5/13/2025',
      dueBy: '5/30/2025'
    },
    {
      activity: 'Clinical Trials',
      score: 9,
      title: 'Mitigation 2',
      rootCause: 'Ineffective control design',
      mitigationType: 'Monitoring - Analytics',
      therapeuticArea: 'Hematology',
      functionalArea: 'Marketing',
      createdBy: 'MARIANO ANDERSSON',
      assignedTo: 'Assignee',
      startOn: '4/24/2025',
      dueBy: '4/30/2025'
    },
    {
      activity: 'Exhibits & Displays & Congress booths',
      score: 12,
      title: 'Exhibits Mitigation',
      rootCause: 'Culture - Differences',
      mitigationType: 'Oversight - Transactional',
      therapeuticArea: 'Neuroscience',
      functionalArea: 'Commercial law & Compliance',
      createdBy: 'Null',
      assignedTo: 'Kartik',
      startOn: '5/12/2025',
      dueBy: '5/30/2025'
    },
    {
      activity: 'Sales Presentations',
      score: 10,
      title: 'Sales Mitigation',
      rootCause: 'Culture - Tone at the top',
      mitigationType: 'Oversight - Transactional',
      therapeuticArea: 'Neuroscience',
      functionalArea: 'Business Operations',
      createdBy: 'Null',
      assignedTo: 'Kartik',
      startOn: '5/22/2025',
      dueBy: '5/27/2025'
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 10) return 'bg-red-500';
    if (score >= 7) return 'bg-yellow-500';
    if (score >= 4) return 'bg-yellow-300';
    return 'bg-green-400';
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Select Activity for Risk Assessment for US
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <div className="bg-blue-600 text-white p-2 grid grid-cols-4 text-sm font-semibold">
                  <div>Activity</div>
                  <div>Impact Rating</div>
                  <div>Likelihood Rating</div>
                  <div>Info</div>
                </div>
                {riskActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-4 p-2 border-b cursor-pointer hover:bg-gray-50 ${
                      activity.selected ? 'bg-blue-200' : ''
                    }`}
                    onClick={() => setSelectedActivity(activity.name)}
                  >
                    <div className="text-sm">{activity.name}</div>
                    <div className="text-sm">{activity.impact}</div>
                    <div className="text-sm">{activity.likelihood}</div>
                    <div className="text-sm">
                      <Info className="h-4 w-4 text-blue-500" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 p-4">
                <h3 className="font-semibold text-blue-600 mb-2">
                  Selected Activity: {selectedActivity}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Provide the impact and likelihood rating for the activities<br/>
                  Note: A rating of "NA" indicates that the corresponding risk activity is not applicable to your market
                </p>
                
                <div className="space-y-4">
                  <div>
                    <button 
                      onClick={() => setShowAnnotation(!showAnnotation)}
                      className="flex items-center text-sm text-gray-600 mb-2"
                    >
                      <Info className="h-4 w-4 mr-2" />
                      Annotation details
                      {showAnnotation ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                    </button>
                    {showAnnotation && (
                      <div className="text-xs text-gray-500 mb-4">
                        Created by: ONE\nilssom1 &nbsp;&nbsp;&nbsp;&nbsp; Created on: 8 days ago
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact Rating *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Likelihood Rating *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Submit
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-sm font-medium mb-2">Please refer to the following points while entering the impact and likelihood ratings:</p>
                  <div className="text-xs space-y-2">
                    <div>
                      <strong>I. Improper Influence on HCP Decision-Making:</strong><br/>
                      Sponsorship of HCPs to scientific congresses could be perceived as an attempt to influence their prescribing behavior, recommendations, or referrals, which violates ethical standards and local laws.
                    </div>
                    <div>
                      <strong>II. Non-Adherence to Objective Selection Criteria:</strong><br/>
                      Failure to use objective criteria for selecting HCPs for sponsorship can lead to allegations of favoritism or conflicts of interest, which could undermine transparency and compliance with legal and ethical requirements.
                    </div>
                    <div>
                      <strong>III. Violations of Local Rules and Cross-Border Compliance:</strong><br/>
                      Sponsorships that do not comply with Local Rules, such as providing excessive hospitality, registration for events outside the HCP's country of licensure, or non-compliance with cross-border regulations, can result in regulatory violations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Select Healthcare Compliance Risk Activity for US
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <div className="bg-blue-600 text-white p-2 grid grid-cols-3 text-sm font-semibold">
                  <div>Localized Risk Activity</div>
                  <div>Impact Rating</div>
                  <div>Likelihood Rating</div>
                </div>
                {localizedRiskActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-3 p-2 border-b cursor-pointer hover:bg-gray-50 ${
                      activity.selected ? 'bg-blue-200' : ''
                    }`}
                    onClick={() => setSelectedLocalizedActivity(activity.name)}
                  >
                    <div className="text-sm">{activity.name}</div>
                    <div className="text-sm">{activity.impact}</div>
                    <div className="text-sm">{activity.likelihood}</div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 p-4">
                <h3 className="font-semibold text-blue-600 mb-2">
                  Selected Activity: {selectedLocalizedActivity}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Please provide the impact rating, likelihood rating and description for the Localized Risk Activity
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Localized Risk Activity *</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Localized Risk Area *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Localized Risk Category *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Localized Residual Risk Area Description *</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded h-20"></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Impact Rating *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Likelihood Rating *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Summary of Risk Activities for US
            </h2>
            <div className="space-y-2 text-sm">
              <p>• You have successfully completed the Risk Assessment.</p>
              <p>• Here's a summary of all assessments submitted. Ensure that the rating are in line with your expectations.</p>
              <p>• <strong>Note:</strong> Risk Activities marked as "Not Applicable for your country" will not appear in this summary.</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div></div>
              <div className="text-right">
                <span className="text-lg font-semibold">Risks Submitted: 30</span>
              </div>
            </div>

            <div className="bg-gray-100 p-2 grid grid-cols-5 text-sm font-semibold">
              <div>Activity</div>
              <div>Risk Area</div>
              <div>Impact Rating</div>
              <div>Likelihood Rating</div>
              <div>Risk Score</div>
            </div>
            
            {summaryData.map((item, index) => (
              <div key={index} className="grid grid-cols-5 p-2 border-b">
                <div className="text-sm">{item.activity}</div>
                <div className="text-sm">{item.riskArea}</div>
                <div className="text-sm text-center">{item.impact}</div>
                <div className="text-sm text-center">{item.likelihood}</div>
                <div className="text-sm">
                  <span className={`text-white px-2 py-1 rounded text-center block ${getScoreColor(item.score)}`}>
                    {item.score}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-4 text-sm mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500"></div>
                <span>Very High</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500"></div>
                <span>High</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400"></div>
                <span>Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-600"></div>
                <span>Low</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> If you don't see the latest data, click the Refresh button (
              <RefreshCw className="inline h-4 w-4" />
              ) at the top of the page to load the most recent information.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              4X4 Matrix of Risk Activities for US
            </h2>
            <div className="space-y-2 text-sm">
              <p>• You have successfully completed the Risk Assessment.</p>
              <p>• Here's a 4x4 Matrix of all Risk Activities submitted.</p>
            </div>

            <MatrixGrid/>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Risk Score Calibration Approval for India
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  Please indicate whether the risk calibration meeting has been completed:
                </h3>
              </div>
              
              <div className="bg-gray-100 p-4">
                <h3 className="font-semibold mb-4">Calibration Sign-off Form</h3>
                
                <div className="space-y-2 mb-4">
                  <button 
                    onClick={() => setShowAnnotation(!showAnnotation)}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <Info className="h-4 w-4 mr-2" />
                    Annotation details
                    {showAnnotation ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                  </button>
                  {showAnnotation && (
                    <div className="text-xs text-gray-500 mb-4">
                      Created by: ONE\quotak13 &nbsp;&nbsp;&nbsp;&nbsp; Created on: 13 hours ago
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-3 bg-gray-200 rounded cursor-pointer">
                    <input 
                      type="radio" 
                      name="calibration" 
                      checked={calibrationCompleted} 
                      onChange={() => setCalibrationCompleted(true)}
                      className="h-4 w-4" 
                    />
                    <span className="text-sm">Yes, the calibration meeting has been completed</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border rounded cursor-pointer">
                    <input 
                      type="radio" 
                      name="calibration" 
                      checked={!calibrationCompleted} 
                      onChange={() => setCalibrationCompleted(false)}
                      className="h-4 w-4" 
                    />
                    <span className="text-sm">No, the calibration meeting has not been completed</span>
                  </label>
                </div>

                <div className="mt-8 p-4 text-center text-sm text-gray-600">
                  Calibration Sign-off was provided on 05-27-2025
                </div>
                
                <div className="mt-6">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Select Action Plan for Risk Activity for India
            </h2>
            
            <p className="text-sm text-gray-600">
              • Risk activities marked as "Very High Risk" have moved directly to mitigation planning due to their criticality and will not be displayed here
            </p>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <div className="bg-blue-600 text-white p-2 grid grid-cols-3 text-sm font-semibold">
                  <div>Activity</div>
                  <div>Action Status</div>
                  <div>Risk Score</div>
                </div>
                {actionPlanData.map((item, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-3 p-2 border-b cursor-pointer hover:bg-gray-50 ${
                      item.selected ? 'bg-blue-200' : ''
                    }`}
                    onClick={() => setSelectedActionActivity(item.activity)}
                  >
                    <div className="text-sm">{item.activity}</div>
                    <div className="text-sm">{item.status}</div>
                    <div className="text-sm">
                      <span className={`text-white px-2 py-1 rounded text-center block ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-100 p-4">
                <h3 className="font-semibold text-blue-600 mb-2">
                  Selected Activity: {selectedActionActivity}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Provide the Action Plan for the selected activity
                </p>
                
                <div className="space-y-4">
                  <div>
                    <button className="text-sm text-blue-600 mb-2">Edit annotation</button>
                    <button 
                      onClick={() => setShowAnnotation(!showAnnotation)}
                      className="flex items-center text-sm text-gray-600 mb-2"
                    >
                      <Info className="h-4 w-4 mr-2" />
                      Annotation details
                      {showAnnotation ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                    </button>
                    {showAnnotation && (
                      <div className="text-xs text-gray-500 mb-4">
                        Created by: ONE\anderm33 &nbsp;&nbsp;&nbsp;&nbsp; Created on: 2 months ago
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Action Plan</label>
                    <div className="text-sm text-gray-600">--</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm">Accept (Accept the risk with the current controls in place)</div>
                    <div className="text-sm">Mitigate (Mitigate the risk by putting a plan in place, and track)</div>
                    <div className="text-sm">Avoid (Avoid the risk, with no further action)</div>
                  </div>
                  
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Select Risk Activity for Mitigation Plan for US
            </h2>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <div className="bg-blue-600 text-center text-white p-2 grid grid-cols-4 text-sm font-semibold">
                  <div>Activity</div>
                  <div>Risk Score</div>
                  <div>Monitoring</div>
                  <div># Mitigation</div>
                </div>
                {mitigationData.map((item, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-4 p-2 border-b cursor-pointer hover:bg-gray-50 ${
                      item.selected ? 'bg-blue-200' : ''
                    }`}
                    onClick={() => setSelectedMitigationActivity(item.activity)}
                  >
                    {/* Activity Name */}
                    <div className="text-sm">{item.activity}</div>
                    {/* Risk Score Bar */}
                    <div className="text-sm">
                      <span className={`text-white px-2 py-1 rounded text-center block ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                    {/* Mitigation */}
                    <div className="text-sm text-center">
                          <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Yes</button>
                          <button className="px-3 py-1 bg-gray-300 text-black rounded">No</button>
                    </div>
                    {/* Mitigation */}
                    <div className="text-sm text-center">
                      <span className="flex items-center justify-center">
                        <Plus className="h-4 w-4 mr-1" />
                        ({item.mitigations})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-100 p-4">
                <h3 className="font-semibold text-blue-600 mb-2">
                  Selected Activity: {selectedMitigationActivity}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Provide the Mitigation Plan for the selected activity
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Root Cause (Please refer the link below the form for root cause description) *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Please provide a detailed description of the root cause. The description should focus on the "why" to describe the underlying cause of the risk *
                    </label>
                    <textarea className="w-full p-2 border border-gray-300 rounded h-20"></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Therapeutic Area</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Functional Area *</label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      <option>Select...</option>
                    </select>
                  </div>
                  
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Submit
                  </button>
                </div>
                
                <div className="mt-4 p-2 bg-orange-100 border border-orange-300 rounded">
                  <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
                    Root Cause Description
                  </button>
                  <p className="text-sm mt-2">Click the button to navigate to the root cause description page</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 bg-gray-600 text-white p-3">
              Summary of Mitigation for Activities of US
            </h2>
            
            <div className="space-y-2 text-sm">
              <p>• You have successfully filled in the mitigations for the activities.</p>
              <p>• Here's a summary of all mitigations submitted.</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div></div>
              <div className="text-right">
                <span className="text-lg font-semibold">Mitigations Submitted: 5</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="bg-gray-100 p-2 grid grid-cols-12 text-xs font-semibold min-w-max">
                <div>Activity</div>
                <div>Risk Score</div>
                <div>Title</div>
                <div>Root Cause</div>
                <div>Mitigation Type</div>
                <div>Therapeutic Area</div>
                <div>Functional Area</div>
                <div>Created By</div>
                <div>Assigned To</div>
                <div>Start On</div>
                <div>Due By</div>
                <div></div>
              </div>
              
              {mitigationSummary.map((item, index) => (
                <div key={index} className="grid grid-cols-12 p-2 border-b text-xs min-w-max">
                  <div>{item.activity}</div>
                  <div>
                    <span className={`text-white px-1 py-1 rounded text-center block ${getScoreColor(item.score)}`}>
                      {item.score}
                    </span>
                  </div>
                  <div>{item.title}</div>
                  <div>{item.rootCause}</div>
                  <div>{item.mitigationType}</div>
                  <div>{item.therapeuticArea}</div>
                  <div>{item.functionalArea}</div>
                  <div>{item.createdBy}</div>
                  <div>{item.assignedTo}</div>
                  <div>{item.startOn}</div>
                  <div>{item.dueBy}</div>
                  <div></div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Note:</strong> If you don't see the latest data, click the Refresh button (
              <RefreshCw className="inline h-4 w-4" />
              ) at the top of the page to load the most recent information.
            </p>
          </div>
        );

      default:
        return <div>Step {currentStep} content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-blue-600 text-xl font-bold">⚡ Risk Insights Engine</div>
          </div>
          <div className="text-blue-600 text-xl font-bold">Risk Assessment Tool</div>
        </div>
      </div>

      {/* Navigation Steps */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="p-2 text-gray-600">🏠</div>
            <span className="text-sm text-gray-600">Home</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                    currentStep === step.id
                      ? 'bg-blue-600 text-white'
                      : currentStep > step.id
                      ? 'bg-gray-400 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step.id}
                </button>
                <div className="ml-2 text-xs text-gray-600 hidden lg:block">
                  {step.label}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default RiskAssessmentTool;
