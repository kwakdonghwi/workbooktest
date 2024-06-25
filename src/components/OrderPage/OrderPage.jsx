import React, { useState } from "react";

const OrderPage = () => {
    const [orderComplete, setOrderComplete] = useState(false);

    const handleOrderSubmit = (event) => {
        event.preventDefault(); // 기본 동작 방지

        // 여기서는 간단히 상태를 변경하여 주문 완료 메시지를 표시
        setOrderComplete(true);
    };

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">커피 주문</h1>
            {!orderComplete ? (
                <form
                    className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg dark:bg-gray-800"
                    onSubmit={handleOrderSubmit}
                >
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="name">
                            이름
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="이름을 입력하세요"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="coffeeType">
                            커피 종류
                        </label>
                        <select
                            id="coffeeType"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        >
                            <option>아메리카노</option>
                            <option>카푸치노</option>
                            <option>에스프레소</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="quantity">
                            수량
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="수량을 입력하세요"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-primary-dark dark:hover:bg-primary"
                    >
                        주문하기
                    </button>
                </form>
            ) : (
                <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg dark:bg-gray-800 text-center">
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">주문이 완료되었습니다!</p>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
