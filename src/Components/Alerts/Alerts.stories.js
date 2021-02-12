import React from 'react';
import Alerts from './Alerts';

export default {
    title: 'Alerts',
    component: Alerts
}

export const PrimarySuccess = () => <Alerts variant='primarySuccess'>Success alert</Alerts>
export const InfoAlert = () => <Alerts variant='infoAlert'>Info alert</Alerts>
export const WarningAlert = () => <Alerts variant='warningAlert'>Warning alert</Alerts>
export const ErrorAlert = () => <Alerts variant='errorAlert'>Error alert</Alerts>

export const PrimarySuccessOutlined = () => <Alerts variant='primarySuccessOutlined'>Success alert</Alerts>
export const InfoAlertOutlined = () => <Alerts variant='infoAlertOutlined'>Info alert</Alerts>
export const WarningAlertOutlined = () => <Alerts variant='warningAlertOutlined'>Warning alert</Alerts>
export const ErrorAlertOutlined = () => <Alerts variant='errorAlertOutlined'>Error alert</Alerts>

