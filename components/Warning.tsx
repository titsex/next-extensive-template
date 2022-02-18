import React from 'react'

const Warning = () => {
    return (
        <div className="card mb-3 p-3">
            <h5 className="text-center mt-1">Шапка сделана в целях демонстрации динамической навигации</h5>
            <span className="text-center">
                <i className="bi bi-exclamation-circle-fill text-warning fw-bold" /> Если Вы перешли на страницу поста и
                нажали «удалить пост», а вернувшись назад, обнаружили что пост цел, то советуем Вам посмотреть на файл
                главной страницы — <span className="text-info">«pages/index»</span>
            </span>
        </div>
    )
}

export default Warning
