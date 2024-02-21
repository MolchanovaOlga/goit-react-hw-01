import css from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.titleColumn}>Type</th>
          <th className={css.titleColumn}>Amount</th>
          <th className={css.titleColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
