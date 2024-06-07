import React from 'react';
 
function DeleteButton({onDelete, id}) {
  return <button 
          className='card__delete' 
          onClick={() => onDelete(id)}
          >Hapus</button>
}
 
export default DeleteButton;