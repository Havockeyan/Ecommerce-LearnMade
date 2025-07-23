export default function Recommendations() {
    const sections = [
      { title: "Most Sold" },
      { title: "Most Viewed" },
      { title: "Top Reviewed" },
      { title: "Trending" },
    ];
  
    return (
      <div className="p-4 space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{section.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white shadow p-4 rounded-md">
                <div className="h-24 bg-gray-200 mb-2"></div>
                <p className="text-sm">Product 1</p>
              </div>
              <div className="bg-white shadow p-4 rounded-md">
                <div className="h-24 bg-gray-200 mb-2"></div>
                <p className="text-sm">Product 2</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  