import React from 'react'

const _Offline = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="card p-2">
                <div className="card-body">
                    <h5 className="card-title">Не удалось получить данные</h5>

                    <p className="card-text">Похоже у Вас отсутствует подключение к интернету</p>
                </div>
            </div>
        </div>
    )
}

export default _Offline
