import React from 'react';
import PropTypes from 'prop-types';
import { PREFABS } from '../../util/prefabUtil';

import Button from '../../components/button';
import Column from '../../components/column';
import Row from '../../components/row';

// import './styles.css';

const propTypes = {
  activePrefab: PropTypes.string.isRequired,
  setActivePrefab: PropTypes.func.isRequired
};

export default function PrefabSelector({
  activePrefab,
  drawingPrefab,
  setActivePrefab
}) {
  return (
    <Column className={'PrefabSelector-container'}>
      <Row>
        <Button
          disabled={!drawingPrefab}
          transparent={activePrefab !== PREFABS.GLIDER}
          inline
          onClick={() => setActivePrefab(PREFABS.GLIDER)}
          text={'Glider'}
        />
        <Button
          disabled={!drawingPrefab}
          transparent={activePrefab !== PREFABS.GLIDER_GUN}
          inline
          onClick={() => setActivePrefab(PREFABS.GLIDER_GUN)}
          text={'Glider Gun'}
        />
      </Row>
      <Row>
        <Button
          disabled={!drawingPrefab}
          transparent={activePrefab !== PREFABS.SHIP_1}
          inline
          onClick={() => setActivePrefab(PREFABS.SHIP_1)}
          text={'TODO'}
        />
        <Button
          disabled={!drawingPrefab}
          transparent={activePrefab !== PREFABS.SHIP_2}
          inline
          onClick={() => setActivePrefab(PREFABS.SHIP_2)}
          text={'TODO'}
        />
      </Row>
    </Column>
  );
}

PrefabSelector.propTypes = propTypes;
