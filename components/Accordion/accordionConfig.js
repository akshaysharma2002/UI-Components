// accordionConfig.js
export const accordionConfig = {
    accordionData: [
      {
        disabled:false,
        title: 'Section 1',
        content: 'Content for section 1',
        isOpenByDefault:false,
        hasSubAccordion: true,        
        subAccordionData: [
          {
            title: 'Subsection 1',
            content: 'Content for subsection 1',
          },
          {
            title: 'Subsection 2',
            content: 'Content for subsection 2',
          },
        ],
      },
      {
        title: 'Section 2',
        content: 'Content for section 2',
        isOpenByDefault:true,
        hasSubAccordion: false,
        subAccordionData: [],
      },
      {
        title: 'Section 3',
        content: 'Content for section 3',
        hasSubAccordion: false,
        isOpenByDefault:false,
        subAccordionData: [],
        disabled:true,
      },
      {
        title: 'Section 4',
        content: 'Content for section 4',
        hasSubAccordion: false,
        isOpenByDefault:false,
        subAccordionData: [],
        disabled:false,
      },
    ],
  };