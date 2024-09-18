import Accordion from "../components/Accordion";
const AccordionComponent = () => {
  function context4() {
    const tableStyle = {
      borderCollapse: "collapse",
      width: "100%",
      marginTop: "10px",
    };

    const thStyle = {
      backgroundColor: "#f2f2f2",
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
    };

    const tdStyle = {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
    };

    return (
      <div>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle} rowSpan={3}>
                Hardware
              </th>

              <td style={tdStyle} rowSpan={2}>
                Chip
              </td>

              <td style={tdStyle}>
                Apple A11 Bionic chip with 64-bit architecture
              </td>
            </tr>

            <tr>
              <td style={tdStyle}>Embedded M11 motion coprocessor</td>
            </tr>

            <tr>
              <td style={tdStyle}>Capacity</td>

              <td style={tdStyle}>64GB/256GB</td>
            </tr>

            <tr>
              <th style={thStyle}>Software</th>

              <td style={tdStyle}>Operating System</td>

              <td style={tdStyle}>iOS 11</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function section3() {
    return <h5>Specifications</h5>;
  }
  const section4 = () => {
    return <h5 className="text-center">Apple iPhone</h5>;
  };
  const context5 = () => {
    return (
      <p>
        <b>Price:</b>$390.0
      </p>
    );
  };

  const accordionData = [
    {
      disabled: false,
      title: "Section 1",
      content: "Content for section 1",
      isOpenByDefault: false,
      hasSubAccordion: true,
      subAccordionData: [
        {
          title: "Subsection 1",
          content: "Content for subsection 1",
        },
        {
          title: "Subsection 2",
          content: "Content for subsection 2",
        },
      ],
    },
    {
      title: "Section 2",
      content: "Content for section 2",
      isOpenByDefault: true,
      hasSubAccordion: false,
      subAccordionData: [],
      disabled: false,
    },
    {
      title: section3,
      content: context4,
      hasSubAccordion: false,
      isOpenByDefault: false,
      subAccordionData: [],
      disabled: false,
    },
    {
      title: section4,
      content: context5,
      disabled: true,
    },
  ];

  const accordionData2 = [
    {
      title: "Section1",
      content: context4,
      isOpenByDefault: true,
      hasSubAccordion: false,
      subAccordionData: [],
    },
    {
      title: "Section 2",
      content: "Content of Section two",
      isOpenByDefault: false,
      hasSubAccordion: true,
      subAccordionData: [
        {
          title: "Subsection 1",
          content: "Content of Subsection One",
        },
      ],
    },
    {
      title: "Section 3",
      content: "Content of Section Three",
      disabled: true,
    },
  ];
  return (
    <div className="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <Accordion accordionData={accordionData2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccordionComponent;
