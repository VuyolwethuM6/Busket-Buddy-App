import { useState } from 'react';
import './dashboard.css';
import add from '../../assets/icons/add.svg';
import CardItem from '../CardItem/CardItem';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('tab1');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="navbar">
        <div>Back</div>
        <div><img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="Profile Photo" /></div>
      </div>

      <div className="tab-container">
        <div className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => showTab('tab1')} id="tab1Btn">Personal</div>
        <div className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => showTab('tab2')} id="tab2Btn">Group</div>
      </div>

      <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
        <CardItem/>
      </div>

      <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
        <p>Group Content</p>
      </div>
      <img src={add} alt="" className="add-button"/>
    </div>
  );
}

export default Dashboard;
