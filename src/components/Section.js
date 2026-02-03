import React from 'react';

export default function Section({ heading, body, list, table, cards }) {
  return (
    <div className="mb-8">
      {heading && <h2 className="text-xl font-bold mb-2">{heading}</h2>}

      {body && <p className="text-gray-700 mb-4">{body}</p>}

      {list && (
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {list.map((item, idx) => (
            <li key={idx} className="mb-1">{item}</li>
          ))}
        </ul>
      )}

      {table && (
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(table[0]).map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-2 border-b text-left text-gray-700 font-medium"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, idx) => (
                <tr key={idx} className="even:bg-gray-50">
                  {Object.values(row).map((val, idy) => (
                    <td key={idy} className="px-4 py-2 border-b text-gray-700">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {cards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700 mb-2">{card.description}</p>
              {card.table && (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(card.table[0]).map((col, idy) => (
                          <th
                            key={idy}
                            className="px-2 py-1 border text-left text-gray-600 font-medium text-sm"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {card.table.map((row, idy) => (
                        <tr key={idy} className="even:bg-gray-50">
                          {Object.values(row).map((val, idz) => (
                            <td
                              key={idz}
                              className="px-2 py-1 border text-gray-700 text-sm"
                            >
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
