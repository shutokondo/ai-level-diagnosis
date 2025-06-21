import React from 'react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>
            🤖 AI活用レベル診断
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '30px'
          }}>
            あなたのAI活用スキルを診断します
          </p>
          <div style={{
            background: '#e3f2fd',
            border: '2px solid #2196f3',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <p style={{
              color: '#1976d2',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              ⏱️ 約3分で完了！
            </p>
            <p style={{
              color: '#1976d2',
              fontSize: '0.9rem',
              marginTop: '5px'
            }}>
              10個の質問に答えて、あなたのAI活用レベルを診断しましょう
            </p>
          </div>
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>
            診断できる5つのレベル
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '10px',
            fontSize: '0.9rem'
          }}>
            <div style={{
              background: '#f5f5f5',
              borderRadius: '10px',
              padding: '15px',
              fontWeight: 'bold',
              color: '#666'
            }}>
              AI未経験
            </div>
            <div style={{
              background: '#e3f2fd',
              borderRadius: '10px',
              padding: '15px',
              fontWeight: 'bold',
              color: '#1976d2'
            }}>
              AI初心者
            </div>
            <div style={{
              background: '#e8f5e8',
              borderRadius: '10px',
              padding: '15px',
              fontWeight: 'bold',
              color: '#388e3c'
            }}>
              AI活用者
            </div>
            <div style={{
              background: '#fff3e0',
              borderRadius: '10px',
              padding: '15px',
              fontWeight: 'bold',
              color: '#f57c00'
            }}>
              AI設計者
            </div>
            <div style={{
              background: '#f3e5f5',
              borderRadius: '10px',
              padding: '15px',
              fontWeight: 'bold',
              color: '#7b1fa2'
            }}>
              AI開発者・推進者
            </div>
          </div>
        </div>
        
        <button
          onClick={onStart}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '20px 40px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          }}
        >
          診断を開始する
        </button>
      </div>
    </div>
  );
};