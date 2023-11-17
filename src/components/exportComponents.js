/* 
    это файл, содержащий в себе ве компоненты. Данный подход позволяет регистрировать компоненты глобально
    и не писать везде import 
*/
import MyMainButton from '@/components/MyMainButton';
import MyQuestItem from '@/components/MyQuestItem';

export default [MyMainButton, MyQuestItem];
