//creating and nexting a component
function Button() {
    return (
        <button>I'm a button</button>
    );
}

export default function MyButton() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <Button />
        </div>
    );
}

//Displaying a component with props
const user = {
    name: 'Hanr Yaha',
    imageUrl: 'https://randomuser.me/api/portraits',
    imageSize: 90
};

export default function UserProfile() {
    return (
        <div>
            <h1>{user.name}</h1>
            <img 
            className="avatar"
            src={user.imageUrl}
            alt={"Photo of " + user.name}
            style={{ 
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        </div>
    )
}

//conditional rendering
let content;
if(isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginPanel />;
}

return (
    <div> 
        {content}
    </div>
)

//<div> {isLoggedIn ? (<AdminPanel />) : (<LoginPanel />)} <div />

//When you don’t need the else branch, you can also use a shorter logical && syntax:

{/* <div>
  {isLoggedIn && <AdminPanel />}
</div> */}

//rendering a list

// const products = [
//     {id: 1, name: 'Apple'},
//     {id: 2, name: 'Banana'}
// ];

// const productlist = products.map(product => {
//     <li key={product.id}>
//         {product.name}
//     </li>
// });

// return (
//     <ul>{productlist}</ul>
// );

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
    const productList = products.map(product => 
        <li 
        key={product.id}
        style={{
            color: product.isFruit ? 'red' : 'green'
        }}>
            {product.title}
        </li>
    );

    return (
        <ul>{productList}</ul>
    );
}
