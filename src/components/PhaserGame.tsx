// src/components/PhaserGame.tsx
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import GameScene from "../scenes/GameScene";

// PhaserGame 컴포넌트
const PhaserGame: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);
  const phaserContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 이미 게임 객체가 만들어졌다면 다시 만들지 않음
    if (gameRef.current) {
      return;
    }

    // Phaser 게임 설정
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO, // WebGL이 가능하면 WebGL 사용, 아니면 Canvas
      width: 800,
      height: 600,
      parent: phaserContainerRef.current || undefined,
      scene: [GameScene],
    };

  
    gameRef.current = new Phaser.Game(config);

    // 컴포넌트 언마운트 시 게임 파괴
    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <div>
      <h2>My Phaser Game</h2>
      {/* 이 div 내부에 Phaser 캔버스가 붙을 것 */}
      <div ref={phaserContainerRef} />
    </div>
  );
};

export default PhaserGame;
