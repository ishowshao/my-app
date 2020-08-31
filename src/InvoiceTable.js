import React from 'react';

class InvoiceTable extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            data: [
                {id: 1, amount: 100, content: '手机', paid: true, url: 'http://www.baidu.com/'},
                {id: 2, amount: 200, content: '电脑', paid: false, url: 'http://www.baidu.com/'},
            ],
        };
    }

    paid(item) {
        console.log(item);
    }

    render() {
        const body = this.state.data.map((item) => {
            return (
                <tr key={item.id.toString()}>
                    <td>{item.id}</td>
                    <td>{item.amount}</td>
                    <td>{item.content}</td>
                    <td>{item.paid ? '是' : '否'}</td>
                    <td>{item.url}</td>
                    <td>
                        <span className="link" onClick={() => this.paid(item)}>标记为已报销</span>
                    </td>
                </tr>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>金额</td>
                        <td>内容</td>
                        <td>是否报销</td>
                        <td>下载链接</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>{body}</tbody>
            </table>
        );
    }
}

export default InvoiceTable;