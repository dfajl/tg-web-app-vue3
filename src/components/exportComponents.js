/* 
    это файл, содержащий в себе ве компоненты. Данный подход позволяет регистрировать компоненты глобально
    и не писать везде import 
*/
import MyButton from '@/components/MyButton';
import QuestsList from '@/components/QuestsList';
import ProgressBar from '@/components/ProgressBar';

export default [MyButton, QuestsList, ProgressBar];
