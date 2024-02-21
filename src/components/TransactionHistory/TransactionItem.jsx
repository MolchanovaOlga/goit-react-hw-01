import css from './TransactionItem.module.css';

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
