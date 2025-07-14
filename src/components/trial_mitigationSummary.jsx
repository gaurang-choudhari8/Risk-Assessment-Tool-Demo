import React from 'react';

const MitigationSummary = () => {

    const mitigationSummary = [ 
    {
    activity: 'Speaker Programs',
    score: 16,
    title: 'Program Speaker Oversight',
    rootCause: 'Insufficient speaker vetting process',
    mitigationType: 'Monitoring - Spot Checks',
    therapeuticArea: 'Oncology',
    functionalArea: 'Medical Affairs',
    createdBy: 'LISA NGUYEN',
    assignedTo: 'Rajeev Verma',
    startOn: '2025-02-01',
    dueBy: '2025-02-15'
    },
    {
    activity: 'Congress Booths',
    score: 16,
    title: 'Booth Compliance Training',
    rootCause: 'Inconsistent messaging practices',
    mitigationType: 'Training & Communication',
    therapeuticArea: 'Immunology',
    functionalArea: 'Commercial Operations',
    createdBy: 'JONATHAN RUIZ',
    assignedTo: 'Emily Tran',
    startOn: '2025-03-10',
    dueBy: '2025-03-25'
    },
    {
    activity: 'Specialty Pharmacy Arrangements',
    score: 12,
    title: 'Contract Review Enhancement',
    rootCause: 'Inadequate contract controls',
    mitigationType: 'Oversight - Contract Review',
    therapeuticArea: 'Hematology',
    functionalArea: 'Market Access',
    createdBy: 'SAMEER MALIK',
    assignedTo: 'Amanda Liu',
    startOn: '2025-01-20',
    dueBy: '2025-02-05'
    },
    {
    activity: 'Interactions with Institutional Customers (including GPOs)',
    score: 12,
    title: 'Customer Interaction Policy Update',
    rootCause: 'Lack of role clarity',
    mitigationType: 'Policy Revision',
    therapeuticArea: 'Cardiology',
    functionalArea: 'Account Management',
    createdBy: 'KATHERINE WELLS',
    assignedTo: 'Sahil Joshi',
    startOn: '2025-05-01',
    dueBy: '2025-05-20'
    },
    {
    activity: 'Sales Presentations',
    score: 12,
    title: 'Sales Content Audit',
    rootCause: 'Improper promotional claims',
    mitigationType: 'Monitoring - Call Review',
    therapeuticArea: 'Neurology',
    functionalArea: 'Sales Enablement',
    createdBy: 'ROGER THOMAS',
    assignedTo: 'Neha Sinha',
    startOn: '2025-04-05',
    dueBy: '2025-04-20'
    },
    {
    activity: 'Educational Items and Reprints',
    score: 9,
    title: 'Educational Material Review',
    rootCause: 'Outdated medical references',
    mitigationType: 'Monitoring - Literature Vetting',
    therapeuticArea: 'Dermatology',
    functionalArea: 'Medical Information',
    createdBy: 'KIMBERLY REED',
    assignedTo: 'Dr. Ishaan Reddy',
    startOn: '2025-06-01',
    dueBy: '2025-06-15'
    },
    {
    activity: 'Vendor and Contractor Management',
    score: 8,
    title: 'Vendor Compliance Review',
    rootCause: 'Third-party risk unmonitored',
    mitigationType: 'Oversight - Due Diligence',
    therapeuticArea: 'Nephrology',
    functionalArea: 'Procurement',
    createdBy: 'ANDREW HILL',
    assignedTo: 'Mina Deshmukh',
    startOn: '2025-01-10',
    dueBy: '2025-01-25'
    },
    {
    activity: 'Clinical Trials',
    score: 6,
    title: 'Trial Oversight Enhancement',
    rootCause: 'Site-level deviation reporting gaps',
    mitigationType: 'Monitoring - Site Visits',
    therapeuticArea: 'Oncology',
    functionalArea: 'Clinical Development',
    createdBy: 'DEEPAK MEHTA',
    assignedTo: 'Laura Garcia',
    startOn: '2025-02-20',
    dueBy: '2025-03-10'
    },
    {
    activity: 'Interactions with Payers',
    score: 6,
    title: 'Payer Communications Oversight',
    rootCause: 'Unapproved value messaging',
    mitigationType: 'Training & Pre-Approval Review',
    therapeuticArea: 'Rheumatology',
    functionalArea: 'Health Economics & Outcomes Research',
    createdBy: 'OLIVER BENNETT',
    assignedTo: 'Anjali Kapoor',
    startOn: '2025-04-15',
    dueBy: '2025-04-30'
    },
    {
    activity: 'Patient Support Programs',
    score: 3,
    title: 'Support Program Audit',
    rootCause: 'Lack of patient eligibility tracking',
    mitigationType: 'Monitoring - Documentation Checks',
    therapeuticArea: 'Endocrinology',
    functionalArea: 'Patient Services',
    createdBy: 'VICTORIA ZHANG',
    assignedTo: 'Priya Shah',
    startOn: '2025-03-15',
    dueBy: '2025-04-01'
    }
];

    const getConsolidatedScoreColor = (score) => {
    if (score >= 12) return 'bg-red-600';
    if (score >= 4) return 'bg-yellow-400';
    if (score >= 2) return 'bg-green-400';
    return 'bg-green-800';
  }

    return (
    <div className="overflow-x-auto shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
  <div className="min-w-max overflow-hidden bg-white p-2">
    {/* Header */}
    <div className="bg-white grid grid-cols-12 text-sm font-semibold border-b-2 border-gray-200">
      <div className="p-3 border-r border-gray-300 min-w-[100px]">Activity</div>
      <div className="p-3 border-r border-gray-300 min-w-[80px]">Risk Score</div>
      <div className="p-3 border-r border-gray-300 min-w-[150px]">Title</div>
      <div className="p-3 border-r border-gray-300 min-w-[120px]">Root Cause</div>
      <div className="p-3 border-r border-gray-300 min-w-[120px]">Mitigation Type</div>
      <div className="p-3 border-r border-gray-300 min-w-[120px]">Therapeutic Area</div>
      <div className="p-3 border-r border-gray-300 min-w-[120px]">Functional Area</div>
      <div className="p-3 border-r border-gray-300 min-w-[100px]">Created By</div>
      <div className="p-3 border-r border-gray-300 min-w-[100px]">Assigned To</div>
      <div className="p-3 border-r border-gray-300 min-w-[100px]">Start On</div>
      <div className="p-3 border-r border-gray-300 min-w-[100px]">Due By</div>
      <div className="p-3 min-w-[80px]">Actions</div>
    </div>
    
    {/* Body */}
    {mitigationSummary.map((item, index) => (
      <div key={index} className="grid grid-cols-12 text-sm border-b border-gray-200 hover:bg-gray-50 transition-colors">
        <div className="p-3 border-r border-gray-200 min-w-[100px] truncate" title={item.activity}>
          {item.activity}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[80px] flex items-center justify-center">
          <span className={`text-white px-2 py-1 rounded text-center text-sm font-medium ${getConsolidatedScoreColor(item.score)}`}>
            {item.score}
          </span>
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[150px] truncate" title={item.title}>
          {item.title}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[120px] truncate" title={item.rootCause}>
          {item.rootCause}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[120px] truncate" title={item.mitigationType}>
          {item.mitigationType}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[120px] truncate" title={item.therapeuticArea}>
          {item.therapeuticArea}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[120px] truncate" title={item.functionalArea}>
          {item.functionalArea}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[100px] truncate" title={item.createdBy}>
          {item.createdBy}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[100px] truncate" title={item.assignedTo}>
          {item.assignedTo}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[100px] truncate" title={item.startOn}>
          {item.startOn}
        </div>
        <div className="p-3 border-r border-gray-200 min-w-[100px] truncate" title={item.dueBy}>
          {item.dueBy}
        </div>
        <div className="p-3 min-w-[80px] flex items-center justify-center">
          {/* Add action buttons here if needed */}
        </div>
      </div>
    ))}
  </div>
</div>
)}


export default MitigationSummary;