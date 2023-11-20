import React from 'react';

const AccountWatchlist = () => {
  const data = [
    { account: 'Sales', thisMonth: '1,194.58', ytd: '11,418.29' },
    { account: 'Advertising', thisMonth: '6,879.02', ytd: '9,271.36' },
    { account: 'Inventory', thisMonth: '4,692.26', ytd: '9,768.09' },
    { account: 'Entertainment', thisMonth: '0.00', ytd: '0.00' },
    { account: 'Product', thisMonth: '4,000.00', ytd: '0.00' },
  ];

  return (
    <div className='account-watch-list'>
      <div className='card-title'>
        <h2>Account Watchlist</h2>
      </div>

      <table className='watchlist-table'>
        <thead>
          <tr>
            <th>Account</th>
            <th>This Month</th>
            <th>YTD</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.account}</td>
              <td>{row.thisMonth}</td>
              <td>{row.ytd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountWatchlist;
