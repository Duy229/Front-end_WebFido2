// // import { createContext, useState, useContext, ReactNode } from 'react';

// // interface ToastContextType {
// //   showToast: (message: string) => void;
// // }

// // const ToastContext = createContext<ToastContextType | undefined>(undefined); // Truyền giá trị mặc định là undefined

// // export const useToast = () => {
// //   const context = useContext(ToastContext);
// //   if (!context) {
// //     throw new Error('useToast must be used within a ToastProvider');
// //   }
// //   return context;
// // };

// // interface ToastProviderProps {
// //   children: ReactNode; // Định nghĩa kiểu dữ liệu của children
// // }

// // export const ToastProvider = ({ children }: ToastProviderProps) => {
// //   const [toastMessage, setToastMessage] = useState('');

// //   const showToast = (message: string) => {
// //     setToastMessage(message);
// //     setTimeout(() => {
// //       setToastMessage('');
// //     }, 4000); // Thời gian hiển thị toast, ở đây là 4000ms (4 giây)
// //   };

// //   return (
// //     <ToastContext.Provider value={{ showToast }}>
// //       {children}
// //       {toastMessage && (
// //         <div className="toast">{toastMessage}</div>
// //       )}
// //     </ToastContext.Provider>
// //   );
// // };
// import React, { ReactNode } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// interface ToastProviderProps {
//   children: ReactNode;
// }

// const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
//   return (
//     <>
//       <ToastContainer />
//       {children}
//     </>
//   );
// };

// export default ToastProvider;
