import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { getLiveness, getReadiness } from './k8sProbes';


// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

// K8s probe-route
const k8sProbeRouter = Router();
k8sProbeRouter.get('/liveness', getLiveness);
k8sProbeRouter.get('/readiness', getReadiness);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/', k8sProbeRouter);
export default baseRouter;
